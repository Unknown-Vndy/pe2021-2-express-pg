module.exports.errorHandler = (err, req, res, next) => {
  /*
  ?. - оператор опциональной последовательности,
  чтоб потенциальное обращение к свойству несуществующего объекта не выкинуло ошибку
  (https://learn.javascript.ru/optional-chaining)
  */

  res.status(err?.status ?? 500).send(err?.message ?? 'Internal server error');
};
