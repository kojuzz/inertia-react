import { Head, Link, usePage } from "@inertiajs/react"
import { useRoute } from "../../../vendor/tightenco/ziggy"
import { useState } from "react"

export default function Home({ posts }) {
    const route = useRoute();
    const { flash } = usePage().props;
    const { component } = usePage();

    const [flashDelete, setFlashDelete] = useState(flash.message);
    const [flashSuccess, setFlashSuccess] = useState(flash.success);

    setTimeout(() => setFlashDelete(null), 2000);
    setTimeout(() => setFlashSuccess(null), 2000);
    
    return (
        <>
            <Head title={component} />
            <h1 className="title">Home</h1>
            {flashDelete && (
                    <div className="absolute top-24 right-6 p-2 rounded-md shadow-lg text-sm text-white bg-red-500">
                        {flashDelete}
                    </div>
            )}
            {flashSuccess && (
                    <div className="absolute top-24 right-6 p-2 rounded-md shadow-lg text-sm text-white bg-green-500">
                        {flashSuccess}
                    </div>
            )}
            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on:</span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        {/* <Link href={`/posts/${post.id}`} className="text-link">Read More</Link> */}
                        <Link href={route('posts.show', post)} className="text-link">Read More</Link>
                    </div>
                ))}
            </div>
            <div className="py-12">
                {posts.links.map(link => (
                    link.url ?
                        <Link
                            href={link.url}
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${link.active ? 'text-blue-500 font-bold' : ''}`}
                        />
                        :
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-yellow-500"
                        ></span>
                ))}
            </div>
        </>
    )
}