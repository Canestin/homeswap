import { useState } from "react";

/**
 * Sync state to session storage so that it persists through a page refresh.
 * Usage is similar to useState except we pass in a session storage key so that
 * we can default to that value on page load instead of the specified initial value.
 *
 * @param {string} key
 * @param {*} initialValue
 * @see https://usehooks.com/useSessionStorage/
 */
function useSessionStorage(key, initialValue) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === "undefined") {
			return initialValue;
		}

		try {
			const item = window.sessionStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error(error);
			return initialValue;
		}
	});

	// Return a wrapped version of useState's setter function that
	// persists the new value to sessionStorage.
	const setValue = (value) => {
		if (typeof window === "undefined") {
			console.error("window is not defined");
		}

		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error(error);
		}
	};
	return [storedValue, setValue];
}

export default useSessionStorage;
