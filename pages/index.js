import Head from 'next/head'
import HomeComponent from '../components/HomeComponent/HomeComponent'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar'
import Projects from '../components/Projects/Projects'
import TimeLineStudies from '../components/Studies/TimeLineStudies'

export default function Home() {
    return (
        <> {/** Section page  to show the bg of the page */}
            <section className="home"></section>
			<HomeComponent/>
            <div id="Projects" className="px-4">
                <Layout children={<Projects/>} />
            </div>
            <TimeLineStudies/>
        </>
    )
}
