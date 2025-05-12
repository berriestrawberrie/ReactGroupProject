export default function RegularButton({ children, handleClick }) {
    return (
        <button
            className="w-full bg-rose-500 py-2 rounded-full hover:bg-rose-400 transition text-pink-50"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}