import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { store } from '~/app/store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <SnackbarProvider
                maxSnack={4}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                style={{
                    backgroundColor: 'var(--white)',
                }}
            >
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </SnackbarProvider>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
