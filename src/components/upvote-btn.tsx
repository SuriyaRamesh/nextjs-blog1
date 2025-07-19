"use client";

export default function UpvoteBtn() {
    const handleUpvote = () => {
        alert("Upvoted!");
    };

    return (
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4" onClick={handleUpvote}>
            Upvote
        </button>
    );
}
