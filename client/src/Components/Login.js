const Login = () =>{
    return(
        <div class="container">
        <h2>Login</h2>
        <form action="">
            <input type="text" name="username" id="username" placeholder="username"></input>
            <input type="password" name="pass" id="pass" placeholder="password"></input>
           <div class="btns">
            <button type="submit">Login</button>
            <a href="./registration.html"><button type="button" id="sign-up">Sign Up</button></a>
           </div>
            
        </form>
    </div>
    )
}

export default Login