Test your HTML and CSS skills by displaying and formatting some text.

**Instructions**

This Peer Review gives the opportunity to explore various ways of using CSS to modify how words are displayed. You are provided with the following HTML code:

```html
<html>
    <head>
        <link rel="stylesheet" href="styles.css" type="text/css"/>
    </head>
    <body>
        <h1>Responsive website development and design</h1>
    </body>
</html>
```

You are to write the code that goes into styles.css, which should change the heading text in 3 ways. Be creative - you can change fonts, colors, position and so on. Write comments in the CSS explaining what each line does. (noting that comments are written like this: `/* this is a comment */`).

**Review Criteria**

You will be reviewed based on the following aspects:

*    Documentation of Correctness:
**        Was the CSS file free from errors?
**        Did the CSS file contain appropriate comments?
*    Evaluation of CSS Modifiers:
**        Did the CSS file use three, different modifiers?

**My Answer**

```css
h1 {
     text-align: center; /* center the text in the element */
     color: #ccc; /* turns the text gray in the element */
     font-variant: small-caps; /* creates an small capitals effect on the text in the element */
}
```