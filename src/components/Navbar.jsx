    function Navbar() {
        return (
            <div className="bg-gray-800 px-9 py-5 text-white flex justify-between rounded-3xl m-1">
                <div className="text-xl font-bold">Devlog</div>
                    <ul className="flex gap-x-9">
                        <a href="/post">Post</a>
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <a href="/profile">Profile</a>
                    </ul>
            </div>
        )
    }

    export default Navbar;