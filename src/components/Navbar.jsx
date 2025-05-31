function Navbar() {
    return (
        <>
        <div className="bg-purple-300 flex justify-end px-6 py-3">
            <ul className="flex gap-x-7">
                <a href="/post">Post</a>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/profile">Profile</a>
            </ul>
        </div>
        </>
    )
}

export default Navbar;