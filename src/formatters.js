export const spacedBracketFormatter = value => `( ${value} )`;
export const nonSpacedBracketFormatter = value => `(${value})`;
export const boldFormatter = value => `<b>${value}</b>`;
export const italicFormatter = value => `<i>${value}</i>`;

export const suffixFormatter = suffix => value => `${value}${suffix}`;
export const prefixFormatter = prefix => value => `${prefix}${value}`;

export const spanFormatter = (...classes) => {
	const classesString = classes.join(' ');
	return value => `<span class="${classesString}">${value}</span>`;
};

export const iconFormatter = (...classes) => {
	const classesString = classes.join(' ');
	return value => `<i class="${classesString}"></i>${value}`;
};
export const spanIconFormatter = (spanClasses, iconClasses) => value => `<span class="${spanClasses}"><i class="${iconClasses}"></i></span>${value}`;


export const divFormatter = classes => value => `<div class='${classes}'>${value}</div>`;

export const linkFormatter = (openInNewTab, uriPrefix) => {
	if (typeof openInNewTab === 'string') {
		uriPrefix = openInNewTab;
		openInNewTab = false;
	}

	uriPrefix = uriPrefix || '';

	return openInNewTab ?
		value => `<a href="${uriPrefix}${value}" target="_blank">${value}</a>` :
		value => `<a href="${uriPrefix}${value}">${value}</a>`;
};

export const bracketFormatter = (spaced) => {
	if (spaced)
		return spacedBracketFormatter;

	return nonSpacedBracketFormatter;
};

export const combinedFormatter = (...formatters) => {
	const chain = formatters.reverse();
	return value => chain.reduce((v, f) => f(v), value);
};

export const uppercaseFirstLetterFormatter = (value) => {
	if (value)
		return value.charAt(0).toUpperCase() + value.slice(1);
	return value;
};

// export const switchIconFormatter = options => value => `<i class="fa ${options[value]}"></i>`;

