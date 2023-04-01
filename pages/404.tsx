import Head from 'next/head';
import { ActiveLink } from '@/components/ActiveLink';
import { useRouter } from 'next/router';

// const { locale, locales } = useRouter();

const Page404 = () => {

	// const {t} = props;

	return (
		<>
			<Head>
				<title>"404 Page"</title>
			</Head>
			<main>
				<div className='flex flex-col items-center'>
					<div className='flex row content-center items-center mt-8'>
						<div
							className='text-primary-dark dark:text-secondary-light font-bold'
							style={{ fontSize: 'calc(2rem + 2vw)' }}>
							404
						</div>
						<div
							className='text-primary-dark dark:text-secondary-light ml-5'
							style={{ fontSize: 'calc(1.5rem + 1.5vw)' }}>
							Page not found
						</div>
					</div>
					<div>
						<img src='../asset/img/4457-dark.svg' alt='break-image' style={{ height: '50vh' }} />
					</div>
					<button className="btn primary-middle dark:secondary-light">
                        <ActiveLink text="HomePage" href="/" />
                    </button>
                </div>
			</main>
		</>
	);
};

export default Page404;

// export async function getStaticProps({ locale }) {
//     const response = await import (`../public/locales/${locale}.json`)
//     console.log(response)

//     return {
//         props: {
//             contact: response.default.contact
//         }
//     }
// }