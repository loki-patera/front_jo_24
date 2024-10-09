import Header from "./components/header/Header";
import EventModal from "./components/modal/eventModal/EventModal";
import SportsSection from "./components/section/sportSection/SportSection";

export default function Home() {

  return (

    <>
      <Header />

      <main>
        <SportsSection />

        <EventModal />
      </main>
    </>
  )
}