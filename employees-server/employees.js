var faker = require('faker');
const { __esModule } = require('stopword');

function generateEmployees(){
    var employees = []

    for(var id = 0; id <50; id ++){
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var email = faker.internet.email();

        employees.push({
            "id": id,
            "first_name": firstName,
            "lasr_name": lastName,
            "email": email
        })
    }

    return { "employees": employees }
}

module.exports = generateEmployees