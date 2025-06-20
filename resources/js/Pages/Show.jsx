import { Head, Link, useForm } from "@inertiajs/react"
import { useRoute } from "../../../vendor/tightenco/ziggy"

export default function Show({ post }) {
    const {delete: destroy, processing} = useForm();
    const route = useRoute();
    function submit(e) {
        e.preventDefault();
        // destroy(`/posts/${post.id}`);
        destroy(route('posts.destroy', post));
    }
    return (
        <>
            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Posted on:</span>
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
                <p className="font-medium">{post.body}</p>
                <div className="flex items-center justify-end gap-2">
                    <Link href={route('posts.edit', post)} className="primary-btn w-16">Edit</Link>
                    <form onSubmit={submit}>
                        <button className="primary-btn" disabled={processing}>Delete</button>
                    </form>
                </div>
            </div>
        </>
    )
}