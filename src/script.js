let places = [4,4,3,2,1];

let isOpen = true;

let table, place;
let numberOfSeats;

while (isOpen) {
    console.log('Кафе открыто!');
    for (let i = 0; i < places.length; i += 1) {
        console.log(`За ${i + 1} столом ${places[i]} свободных мест\n`); 
    } 
    
    let choice = +prompt('Забронировать стол? 1 -да, 2 - нет: ');
    switch (choice) {
        case 1:
            table = +prompt('За каким столом хотите сесть?');
            if (table <= places.length) {
                place = +prompt(`Сколько мест вы хотите забронировать? Доступно ${places[table - 1]} мест(-a)`);
                if (place <= places[table - 1]) {
                    console.log(`Вы забронировали ${place} мест(-a) за столом ${table}!`);
                    isOpen = false;
                    break;
                } else {
                    console.log('За этим столом нет столько мест!');
                    isOpen = false;
                    break;  
                }
            } else {
                console.log('Данного стола не существует!');
                isOpen = false;
                break;  
            }
        case 2: 
            console.log('Бронь отменяется');
            isOpen = false;
            break;
        default:
            console.log('Неверное значение!');
            isOpen = false;
            break;
    }
    
}