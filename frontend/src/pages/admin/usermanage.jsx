



import axios from "axios";
import { useEffect, useState } from "react";


export const Usermanage = () => {
    const token = localStorage.getItem('token')
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const [edit, setedit] = useState()
    console.log('edit', edit)
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });


    const handledelete = async (user) => {
        try {
            console.log('user', user)
            const res = await axios.delete(`http://localhost:3000/api/user/deletebyID/${user._id}`)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const fetchdata = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/user/',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

            console.log('res', res.data.data)
            setUsers(res.data.data || []);
        } catch (error) {
            console.log(error)
            setUsers([]);
        } finally {
            setLoading(false);
        }
    }

    const handleedit = (user) => {
        setForm({
            name: user.name,
            email: user.email
        })
        setedit(user._id)
    }


    useEffect(() => {
        fetchdata()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (edit) {
                const res = await axios.patch(`http://localhost:3000/api/user/upadtebyId/${edit}`,
                    form,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                if (res) {
                    fetchdata()
                    setedit(null)
                }
            } else {


                const res = await axios.post('http://localhost:3000/api/user/create',
                    form,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                console.log('test test ', res)

            }
        } catch (error) {
            console.log(error)
        }
        // setUsers([...users, form]);
        setForm({ name: "", email: "", password: "" });
    };

    return (
        <div className="container mt-5">

            {/* FORM CARD */}
            <div className="card shadow mb-4">
                <div className="card-header bg-grey text-black">
                    <h4>Create User</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">

                            <div className="col-md-4">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-4">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <button className="btn btn-success mt-3">
                            Create User
                        </button>
                    </form>
                </div>
            </div>

            {/* DATATABLE CARD */}
            <div className="card shadow">
                <div className="card-header bg-dark text-white">
                    <h4>User List</h4>
                </div>

                <div className="card-body">

                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(users || []).map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td><span onClick={() => handleedit(user)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                        </svg></span>
                                            <span onClick={() => handledelete(user)}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg>
                                            </span>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

        </div>
    );
};