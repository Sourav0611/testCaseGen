import styles from './style.module.css'

export default function Account() {
  return (
    <>
      <main className={styles.account}>
        <div className={styles.register}>
          <form action="">
            <legend className={styles.legend}>Register</legend>
            <input type="text" name="username" id="username" placeholder="username" className={styles.input} />
            <input type="email" name="reg_email" id="reg_email" placeholder="email" className={styles.input} />
            <input type="email" name="reg_email2" id="reg_email2" placeholder="verify email" className={styles.input} />
            <input type="password" name="reg_pass" id="reg_pass" placeholder="password" className={styles.input} />
            <input type="password" name="reg_pass2" id="reg_pass2" placeholder="verify password" className={styles.input} />
            <button className={styles['account-button']}>
              <i className="ri-user-add-line inline_icon"></i>
              Sign up
            </button>
          </form>
        </div>

        <div className={styles.login}>
          <form action="">
            <legend className={styles.legend}>Login</legend>
            <input type="text" name="login_username" id="login_username"  placeholder="username" className={styles.input} />
            <input type="password" name="login_password" id="login_password" placeholder="password" className={styles.input} />
            <div className={styles['remember-me']}>
              <label id="remember-me-label" className={styles['remember-me-label']}>
                <input type="checkbox" name="rememberMe" id="rememberMe" className={styles['remember-me-checkbox']} defaultChecked />
                <div className={styles['remember-me-heading']}>Remember me</div>
              </label>
            </div>
            <button className={styles['account-button']}>
              <i className="ri-login-box-line inline_icon"></i>
              Sign in
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
