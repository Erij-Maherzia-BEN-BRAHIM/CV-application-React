const Personne = require('../models/person');
const _ = require('lodash');


exports.getAllPersons = async (req, res) => {

    // Personne.find().then(result => {
    //     res.status(200).json(result);
    // })
    //     .catch(err => {
    //         console.log(err);
    //     })

    try {
        const result = await Personne.find();
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }


}
exports.getPerson = (req, res) => {
    const pId = req.params.id;

    Personne.findById(pId)
        .then(p => {
            if (!p) {
                const error = new Error('Could not find this person');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json(p)
        })
        .catch(err => {
            console.log(err);
        })


}
exports.createPerson = (req, res, next) => {
    // const prenom = req.body.prenom;
    // const nom = req.body.nom;
    // const age = req.body.age;
    // const profession = req.body.profession;
    // const avatar = req.body.avatar;

    // const newPerson = new Personne({
    //     prenom: prenom,
    //     nom: nom,
    //     age: age,
    //     profession: profession,
    //     avatar: avatar
    // });

    let newP = _.pick(req.body, ['prenom', 'nom', 'age', 'profession', 'avatar']);
    const newPerson = new Personne(newP);

    newPerson.save()
        .then(result => {
            res.status(201).json({
                message: 'New Person created successfully',
                id: result['_id'].toString()
            })
        })
        .catch(err => {
            console.log(err);
            next();
        })



}
exports.updatePerson = (req, res) => {
    const pId = req.params['id'];
    // const prenom = req.body.prenom;
    // const nom = req.body.nom;
    // const age = req.body.age;
    // const profession = req.body.profession;
    // const avatar = req.body.avatar;


    Personne.findById(pId)
        .then(p => {
            if (!p) {
                const error = new Error('Could not find this person');
                error.statusCode = 404;
                throw error;
            }
            // p.prenom = prenom;
            // p.nom = nom;
            // p.age = age;
            // p.profession = profession;
            // p.avatar = avatar;

            p = _.merge(p, req.body)

            return p.save();
        })
        .then(result => {
            res.status(200).json({
                message: 'Person updated successfully',
                result: result
            });
        })
        .catch(err => {
            console.log(err);
        })

}
exports.deletePerson = (req, res) => {

    const pId = req.params['id'];
    Personne.findByIdAndRemove(pId)
        .then(p => {

            if (!p) {
                const error = new Error('Could not find this person');
                error.statusCode = 404;

                throw error;
            }
            res.status(200).json({
                message: 'Person successfully deleted',
                result: p
            })
        })
        .catch(err => {
            console.log(err);
        })
}

