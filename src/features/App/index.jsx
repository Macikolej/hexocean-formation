import { Provider } from "react-redux";

import { store } from "shared/store";
import { MainPage } from "features/MainPage";

export const App = () => {
	return (
		<Provider store={store}>
			<MainPage />
		</Provider>
	)
}