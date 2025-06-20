import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        body: '',
    });
    function submit(e) {
        e.preventDefault();
        post("/posts");
    }
    return (
        <div>
            <Head title="Create">
                <meta head-key="description" name="description" content="Create a New Post" />
            </Head>
            <h1 className="title">Create a New Post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea 
                        rows="10"
                        value={data.body}
                        onChange={ e => setData('body', e.target.value) }
                        className={errors.body && 'ring-red-500'}
                    ></textarea>
                    {errors.body && <p className="error">{errors.body}</p>}
                    <button className="primary-btn mt-4" disabled={processing}>Create Post</button>
                </form>
            </div>
        </div>
    )
}