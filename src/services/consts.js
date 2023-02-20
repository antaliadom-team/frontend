const regularEmail = /^([A-Za-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,3})$/;

const regularName = /[/!$()*+.<>?^{|}_0-9]/;
// const regularName = /[A-Za-zА-Яа-я]/;

const regularPhone = /^((\+7|7|8)+([0-9]){10})$/;

export { regularName, regularEmail, regularPhone };
