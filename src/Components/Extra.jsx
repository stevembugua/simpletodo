const Profile = () => {
    return ( 
        <>
        <div className="container">
        <div className="profile">
            <h1>LOGIN</h1>
            <p>Username</p>
            <input type={'text'}placeholder={'enter your name'}/>
            <p>Email</p>
            <input type={'email'}placeholder={'enter your email'}/>
            <p>Password</p>
            <input type={'password'}placeholder={'enter your password'}/>
            <p>Nationality</p>
            <input type={'text'}placeholder={'enter your nationality'}/>
            <p>Marital status</p>
            <input type={'text'}placeholder={'enter your marital status'}/>
            <button>submit</button>
        </div>
        </div>
        </>
     );
}
 
export default Profile;