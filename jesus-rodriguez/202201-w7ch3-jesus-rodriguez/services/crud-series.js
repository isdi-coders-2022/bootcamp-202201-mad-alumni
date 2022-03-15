export async function createSerie(body, Serie) {
    const newSerie = new Serie(body);
    return await newSerie.save();
}

export async function getSeries(Serie) {
    return await Serie.find({}).populate('platform', {
        name: 1,
    });
}
