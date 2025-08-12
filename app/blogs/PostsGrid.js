"use client";
import { useState } from "react";



export default function PostsGrid({
  initialPosts,
  initialPage,
  pageSize,
  hasMoreInitial,
  formatDate,
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(hasMoreInitial);
  const [loading, setLoading] = useState(false);

  // ✅ local date formatter (not passed in props)
  const fmtDate = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });

  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const res = await fetch(`/api/public-blogs?limit=${pageSize}&page=${page + 1}`, { cache: "no-store" });
    const data = await res.json();
    setPosts((prev) => [...prev, ...data.items]);
    setPage((p) => p + 1);
    setHasMore(data.hasMore);
    setLoading(false);
  };

  return (
    <>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-lg-4 col-md-6 mb-4">
            <div className="blog-card h-100 p-4" style={{backgroundColor:'#fff', borderRadius:'15px', boxShadow:'0 10px 25px rgba(0,0,0,0.1)'}}>
              <div className="blog-image mb-3 ratio ratio-16x9">
                {post.coverImage && (
                  <img src={post.coverImage} alt={post.title} className="w-100 h-100 object-fit-cover rounded" />
                )}
              </div>

              <div className="blog-content">
                <div className="blog-meta mb-3">
                  {/* {post.category && <span className="badge badge-outline-primary px-3 py-1 mr-2" style={{borderRadius:'12px', fontSize:'12px'}}>{post.category}</span>} */}
                  <small className="text-muted">{fmtDate(post.createdAt)}</small>
                </div>

                <h5 className="blog-title mb-3" style={{lineHeight:'1.4', minHeight:'60px'}}>
                  {post.title}
                </h5>

                <p className="blog-excerpt text-muted mb-4" style={{fontSize:'14px', lineHeight:'1.5'}}>
                  {(post.excerpt ?? "").slice(0, 120)}
                </p>

                <div className="d-flex align-items-center justify-content-between">
                  <div className="author-info d-flex align-items-center">
                    <img src="/assets/img/icons/user.svg" alt="" style={{width:'15px', height:'15px',backgroundColor:"black"}} className="mr-2" />
                    <small>By Admin</small>
                  </div>
                  <a href={`/${post.slug}`} className="btn btn-sm btn-outline-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          {hasMore ? (
            <button
              onClick={loadMore}
              disabled={loading}
              className="btn btn-primary btn-lg px-5 py-3"
              style={{borderRadius:'12px'}}
            >
              {loading ? "Loading..." : "Load More Articles"}
            </button>
          ) : (
            <span className="text-muted">No more articles</span>
          )}
        </div>
      </div>
      <div className="row mt-5"></div>

    </>
  );
}
