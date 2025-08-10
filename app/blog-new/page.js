import Layout from "@/components/layout/Layout";
import PostsGrid from "./PostsGrid";
import { headers } from "next/headers";

export const dynamic = "force-dynamic"; // avoid static pre-render
const PAGE_SIZE = 12;

function absoluteUrl(path) {
  const h = headers();
  const proto = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("host");
  return `${proto}://${host}${path}`;
}

export default async function Page() {
  const url = absoluteUrl(`/api/public-blogs?limit=${PAGE_SIZE}&page=1`);

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  const items = data.items ?? [];
  const hasMore = data.hasMore ?? false;
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="OUR BLOGS">
        {/*===== Blog Header Section =====*/}
        <div className="section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <div className="heading2 no-margin-heading">
                            <h2>Our Blogs</h2>
                            <h3>Security News and Tips</h3>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="heading2 no-margin-heading">
                            <p>
                                Stay informed with the latest security insights, industry trends, and expert advice from Metro Guards. Our blog covers everything from residential protection to commercial security solutions, helping you make informed decisions about your safety needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="heading2 text-center mb-5">
                    <small className="heading-top inner-heading-top">
                        <img src="/assets/img/icons/hands.svg" alt="" />Recent Articles
                    </small>
                    <h2>Latest Security Insights</h2>
                    <p>Discover expert advice and industry insights to help you make informed security decisions</p>
                </div>
            </div>
        </div>
        <PostsGrid
          initialPosts={items}
          initialPage={1}
          pageSize={PAGE_SIZE}
          hasMoreInitial={hasMore}
        />
      </div>
    </Layout>
  );
}
