export class Component {
    renderInner(selector) {
        document.querySelector(selector).innerHTML = this.template;
    }

    renderOuter(selector) {
        document.querySelector(selector).outerHTML = this.template;
    }

    modifySerie = async (object) => {
        const apiUrl = `http://localhost:3004/series/${object.id}`;
        const response = await fetch(apiUrl, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object),
        });
        const data = response.json();
        return data;
    };

    deleteSerie = async (object) => {
        const apiUrl = `http://localhost:3004/series/${object.id}`;
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object),
        });
        const data = response.json();
        return data;
    };
}
