/* Na podstawie tablicy userów:
[
   {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
   {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
   {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
   {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];
stworzyć dynamicznie tabelę i wypełnić ją danymi z tablicy users.

A.
+ Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa ma wyświetlić w konsoli ID danego użytkownika
+ Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd
+ rząd powinien zawierać klasę table-row
+ komórka powinna zawierać klasę table-cell
+ najechanie na rząd ma go podświetlić
*/

const users = [
    {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
    {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
    {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
    {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

const $table = $('<table class="table table-dark">').appendTo('body');

const getRowsWithUsers = () => {
    return users.map(user => {
        return $(`
        <tr class="table-row">
            <td class="table-cell"><input class="check-box" type="checkbox" data-user-id="${user.id}"></td>
            <td class="table-cell">${user.id}</td>
            <td class="table-cell">${user.firstName}</td>
            <td class="table-cell">${user.lastName}</td>
            <td class="table-cell">${user.age}</td>
            <td class="table-cell">${user.city}</td>
            <td class="table-cell fa fa-times remove-icon" aria-hidden="true"></td>
        </tr>
        `)
    })
};

$table.append(getRowsWithUsers());

// Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa ma wyświetlić w konsoli ID danego użytkownika
const $checkbox = $('.check-box');

function getUserById() {
    $(this).prop('checked');
    console.log($(this).data('user-id'));
}
$checkbox.on('change', getUserById);

// Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd
function removeRow() {
    $(this).closest('tr').remove()
}
$table.on('click', '.remove-icon', removeRow);

// najechanie na rząd ma go podświetlić
function addHighlight() {
    $(this).addClass('highlight');
}
function removeHighlight() {
    $(this).removeClass('highlight');
}
$table.on({
    mouseenter: addHighlight,
    mouseleave: removeHighlight
}, 'tr');

// B.
// - nad tabela ma być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
// - formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych
//  */

const $firstName = $('#first-name');
const $lastName = $('#last-name');
const $age = $('#age');
const $city = $('#city');
const $addUser = $('#add-user');

$addUser.on('click', function() {
    users.push({
        firstName: $firstName.val(),
        lastName: $lastName.val(),
        age: $age.val(),
        city: $city.val(),
        id: users.length + 1
    });
    $table.html(getRowsWithUsers());
});
// - przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery

function userInputValidation() {
    const minRequiredNameLength = 3;
    const minRequiredAge = 18;
    return $firstName.val().length < minRequiredNameLength ||
            $age.val() < minRequiredAge ;
}

function validateForm() {
    $addUser.prop('disabled', userInputValidation);
}

$firstName.add($age).on('keyup', validateForm);
