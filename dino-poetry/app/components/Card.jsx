import Link from "next/link"

export default function SearchResultCard({title, postId, onClose}) {
    return (
        <Link href={`/blog/${postId}`}>
        <div className="search-result-card" onClick={onClose}>
            <h1>{title}</h1>
        </div>
        </Link>
    )
}