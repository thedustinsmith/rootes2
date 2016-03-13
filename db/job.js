module.exports = function (bookshelf) {
    var Job = bookshelf.Model.extend({
        tableName: 'Job'
    });

    var Jobs = bookshelf.Collection.extend({
        model: Job
    }, 
    {// static methods
        
    });

    return {
        model: Job,
        collection: Jobs
    };
};