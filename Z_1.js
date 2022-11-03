let a = prompt("Пуш пароль:" )
if ( a.length > 4 && ( a.includes('_') || a.includes('-') ) )
{console.log("Надёжный пароль")}
else
{console.log("Ненадёжный пароль")}