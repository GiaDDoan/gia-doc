// import { allPosts } from 'contentlayer/generated'
import PostCard from "@/components/PostCard";
import { compareDesc, format, parseISO } from 'date-fns'

function Home() {
    // const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  
    return (
      <div className="mx-auto max-w-xl py-8">
        {/* <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))} */}
        <h1>Home</h1>
      </div>
    )
  }

  export default Home;