export function ListHeroes() {
    const topHeroes = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
    ];

    return (
        <>
            <div class="div-container-list">
                <ul>
                    {topHeroes.map((heroe) => {
                        return (
                            <li class="list-heroes-container__item">
                                <span class="list-heroes-container__item-id">
                                    {heroe.id}
                                </span>
                                <a href="/details.html?hero=${heroe.id}">
                                    <span class="list-heroes-container__item-name">
                                        {heroe.name}
                                    </span>
                                </a>
                                <button
                                    id="${heroe.id}"
                                    class="delete-button"
                                    type="button"
                                >
                                    X
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
