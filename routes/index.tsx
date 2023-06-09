import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="stylesheet.css" />
      </Head>
      <div class="home">
        <div class="home__tagline">
          <span>Take control of</span>
          <br />
          <span class="home__tagline--emphasized">Your Government</span>
          <br />
          <br />
          <span>Decide the future</span>
          <span class="home__of-top"> of </span>
          <br />
          <span class="home__of-bottom"> of </span>
          <span class="home__tagline--emphasized">Our Nation</span>
        </div>
        <div class="home__sub-tagline">
          Join the refreshingly modern, member-owned political cooperative that
          challenges everything you’ve come to expect from a political party.
        </div>

        <div class="home__blurb">
          <div class="home__blurb-heading">
            <span>The Republi-cratic monopoly.</span>
          </div>
          <div class="home__blurb-details">
            Feigning competition over values and visions for the country,
            America's two dominant political parties work in remarkable unison
            to protect the interests of their biggest donors. Laws and reforms
            that would deliver the greatest benefits for average Americans, are
            routinely blocked or buried.
          </div>
        </div>

        <div class="home__blurb">
          <div class="home__blurb-heading">
            <span>Corruption-proof by default.</span>
          </div>
          <div class="home__blurb-details">
            The Cooperative Party eliminates the influence of money in politics
            by sending a different type of representative to congress. Our
            representatives don’t have personal agendas, or careers to build in
            politics. They simply follow a pre-determined script, written by
            Cooperative Party members. No campaigning, no "deal making", no
            bullshit.
          </div>
        </div>

        <div class="home__blurb">
          <div class="home__blurb-heading">
            <span>Cooperative by design.</span>
          </div>
          <div class="home__blurb-details">
            Rather than recruiting like-minded people to rally behind various
            causes, we start with members from different walks of life, identify
            the problems they share, and the solutions they find agreeable.
            <br />
            The Cooperative Party is also cooperatively managed. Members define
            the party's priorities, control the party's finances, and choose the
            representatives we send to congress.
          </div>
        </div>
      </div>
    </>
  );
}
