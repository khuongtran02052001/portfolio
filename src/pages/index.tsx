import ServiceCard from "../components/ServiceCard";
import Head from "next/head";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { fadeUp, stagger } from "../animation/animation";
import { IService } from '../type'

interface IDataProps {
  service: IService[]
}

interface IComponentHome extends React.FC<IDataProps> { }

const Home: IComponentHome = props => {
  const { service } = props

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <Head>
        <meta name="description" content='This website I made to train myself as well as want the employer to see my personal information, to see if I am suitable for the job, thank you for reading.' />
        <title>Tran Duy Khuong | Home </title>
      </Head>
      <p className="my-3 font-medium">
        Hi I&apos;m Tran Duy Khuong, I&apos;m a junior developer, I graduated ,
        thank you for visiting my site, I have completed a few projects, but in
        the future I will be better
      </p>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-bold tracking-wide">What I Offer</h4>
        <motion.div
          className="grid gap-4 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {service.map((services, idx) =>
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="mt-1 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard services={services} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {

  const res = await fetch('https://tranduykhuong-alpha.vercel.app/api/sevices').then(value => value.json())
  return {
    props: {
      service: res.service,
    },
  };
};
