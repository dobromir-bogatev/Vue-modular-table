# Formatters

---

The formatters are added in the field definition.

```js
new TableDefinition()
    .addColumn(column => column
        .addField('name', 'Name', field => field
            .formatter(myFormatterHere)));
```

They can be normal or arrow functions that receive the value and return the formatted version. Through the formatters you can also pass HTML that will be rendered. Lets see a few examples.

```js
const boldFormatter = value => `<b>${value}</b>`
const divFormatter = classes => value => `<div class='${classes}'>${value}</div>`
```

We defined a set of basic formatters that are used often. You can import them from 'vue-modular-table'.

```js
import { divFormatter, prefixFormatter, boldFormatter } from 'vue-modular-table';
```

Find the formatters you need in the table below or create your own formatter fitting your specific needs.

| Formatter | Description |
| :--- | :--- |
| spacedBracketFormatter\(\) | Encloses the **value **with spaces and brackets. |
| nonSpacedBrackedFormatter\(\) | Encloses the **value **with brackets only. |
| bracketFormatter\(spaced\) | The combination of the two above. Encloses the **value **with brackets. If true is passed in the place of **spaced **the value will be enclosed in spaces before the brackets. |
| boldFormatter\(\) | Encloses the **value **with "b" tag. |
| italicFormatter\(\) | Encloses the **value **with "i" tag. |
| suffixFormatter\(suffix\) | Adds the passed **suffix **after the **value.** |
| prefixFormatter\(prefix\) | Adds the passed **prefix **before the **value.** |
| divFormatter\(classes\) | Encloses the **value **with "div" tag. |
| spanFormatter\(classes\) | Encloses the **value **with "span" and adds the passed **classes** to it. |
| iconFormatter\(classes\) | Adds "i" tag applying the passed **classes**, before the** value. ** |
| spanIconFormatter\(spanClasses, iconClasses\) | Adds tag "i" applying the passed **iconClasses **and encloses it with "span" tag applying the passed **spanClasses. **All this is before the **value.** |
| linkFormatter\(openInNewTab, uriPrefix\) or linkFormatter\(openInNewTab\) or linkFormatter\(uriPrefix\) | Encloses the **value **with "a" tag. **openInNewTab **is boolean. If true it will add "target="\_blank"". **uriPrefix **will be added in the "href" property before the **value **in the "a" tag. |
| uppercaseFirstLetterFormatter\(\) | Makes the first char of the **value **uppercase. |
| combinedFormatter\(formatters\) | While usually you pass one formatter, this formatter allows you to pass more and it combines them. For example: combinedFormatter\(divFormatter\(\), suffixFormatter\(' kg'\)\) |

_Note: combinedFormatter allows you to pass more than one formatter._

