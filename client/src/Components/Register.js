const Register = () => {
        return(
            <div class="container">
            <h2>Registration</h2>
            <form action="">
                <p>Password didnot match !!!</p>
                <input type="text" name="username" id="username" placeholder="username"></input>
                <input type="email" name="email" id="email" placeholder="email"></input>
                <input type="password" name="pass" id="pass" placeholder="password"></input>
                <input type="password" name="confirm-pass" id="confirm-pass" placeholder=" confirm password"></input>
    
                <div class="btns">
                    <button type="submit"  >Register</button>
                    <li><a href="/login">Login</a></li>
                </div>
    
            </form>
        </div>
        )
}

export default Register