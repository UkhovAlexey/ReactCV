import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
	if (typeof window === 'undefined') {
		return defaultValue;
	}

	const saved = localStorage.getItem(key);
	if (saved === null) {
		return defaultValue;
	}

	try {
		return JSON.parse(saved);
	} catch (error) {
		console.warn(`Unable to read localStorage key "${key}":`, error);
		return defaultValue;
	}
}

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem(key, JSON.stringify(value));
		}
	}, [key, value]);

	return [value, setValue];
};