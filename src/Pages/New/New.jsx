import React, { useState } from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import './New.scss';

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");
   // console.log(file);
    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1 className="title">{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file?URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">Image : <i className="ri-file-download-line"></i></label>
                                <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label >{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            {/* <div className="formInput">
                                <label htmlFor="">Name and Suename</label>
                                <input type="text" placeholder='John Cena' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='John@gmail.com' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Phone</label>
                                <input type="text" placeholder='+212 4355 5677' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Password</label>
                                <input type="password" />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder='Elton st.12' />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Country</label>
                                <input type="text" placeholder='Dhaka' />
                            </div> */}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;