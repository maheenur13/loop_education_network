/* eslint-disable no-empty */
import store, { wrapper } from '@store';
import { authSignIn } from '@store/actions';
import App, { AppContext, AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'swiper/css';
import 'swiper/css/bundle';
import '../../public/scss/app.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	const dispatch = useDispatch();
	console.log('noww', pageProps);
	useEffect(() => {
		nProgress.configure({ showSpinner: true });
		router.events.on('routeChangeStart', () => nProgress.start());
		router.events.on('routeChangeComplete', () => nProgress.done());
		router.events.on('routeChangeError', () => nProgress.done());

		if (pageProps?.authUser) {
			const { token, ...rest } = pageProps.authUser;
			console.log('rest', rest);

			if (token) dispatch(authSignIn(rest));
		}
	}, [dispatch, pageProps.authUser, router.events]);

	return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (appContext: AppContext) => {
	const { ctx } = appContext;
	const cookies = parseCookies(ctx);

	if (ctx?.req) {
		if (cookies?.token) {
			// const { token } = cookies;
			try {
				const {
					user: { profile, isAuthenticate },
				} = store.getState();

				if (isAuthenticate) {
					const data = { ...profile, token: cookies.token };
					ctx.authUser = data;
				}
			} catch (error) { }
		}
	} else if (typeof window !== 'undefined') {
		const {
			user: { profile, isAuthenticate },
		} = store.getState();

		if (isAuthenticate) {
			const data = { ...profile, token: cookies.token };
			ctx.authUser = data;
		}
	}

	const appProps = await App.getInitialProps({ ...appContext });
	appProps.pageProps = {
		...appProps.pageProps,
		authUser: ctx?.authUser,
	};
	return { ...appProps };
};

export default wrapper.withRedux(MyApp);
