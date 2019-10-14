const BASE_URL = '/cars';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(car) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(car)
  }).then(res => res.json());
}

export function update(car) {
  return fetch(`${BASE_URL}/${car._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(car)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}