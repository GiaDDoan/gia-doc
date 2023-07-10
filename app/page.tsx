import { allPosts } from 'contentlayer/generated'
import PostCard from "@/components/PostCard";
import { compareDesc, format, parseISO } from 'date-fns'

function Home() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  
    return (
      <div className="mx-auto max-w-xl py-8">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        <h1>Home</h1>
      </div>
    )
  }

  export default Home;