import { arrgentle } from '../modelos/gentlemen';

export function Gentleman() {
    return (
        <ul class="gentlemen">
            {arrgentle.map((item) => {
                return (
                    <li class="gentleman">
                        <div class="gentleman__avatar-container">
                            <img
                                class="gentleman__avatar"
                                src={'img/' + item.picture}
                                alt="The Fary pointing at you"
                            />
                            <span class="gentleman__initial">F</span>
                        </div>
                        <div class="gentleman__data-container">
                            <h2 class="gentleman__name">{item.name}</h2>
                            <ul class="gentleman__data-list">
                                <li class="gentleman__data">
                                    <span class="gentleman__data-label">
                                        Profession:
                                    </span>
                                    {item.profession}
                                </li>
                                <li class="gentleman__data">
                                    <span class="gentleman__data-label">
                                        Status:
                                    </span>{' '}
                                    {item.status}
                                </li>
                                <li class="gentleman__data">
                                    <span class="gentleman__data-label">
                                        Twitter:
                                    </span>{' '}
                                    {item.twitter}
                                </li>
                            </ul>
                        </div>
                        <i class="icon gentleman__icon fas fa-check"></i>
                        <i class="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
                    </li>
                );
            })}
        </ul>
    );
}
