export function AccessData() {
    return (
        <>
            <li>
                <label htmlFor="name">
                    Username:
                    <input type="text" id="name" name="username" required />
                </label>
            </li>
            <li>
                <label htmlFor="name">
                    Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </label>
            </li>
            <li>
                <label htmlFor="name">
                    Repeat Password:
                    <input
                        type="password"
                        id="repeat_password"
                        name="repeat_password"
                        required
                    />
                </label>
            </li>

            <li>
                <label htmlFor="type_account">
                    Type Account:
                    <select name="type_account" required>
                        <option value="personal">Personal</option>
                        <option value="pro" selected>
                            Pro
                        </option>
                        <option value="business">Bussiness</option>
                    </select>
                </label>
            </li>
            <li>
                <button type="button">Next</button>
            </li>
        </>
    );
}
