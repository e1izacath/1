let x = 5;

switch (typeof x) {
   case 'string':
        console.log('It\'s a string');
        break;
    case 'number':
        console.log('It\'s a number');
        break;
    case 'boolean':
        console.log('It\'s a boolean');
        break;
    default:
        console.log('Word hasn\'t recognized');
}