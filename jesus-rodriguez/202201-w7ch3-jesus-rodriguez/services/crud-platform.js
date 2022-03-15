export async function getAllPlatform(Platform) {
    return await Platform.find({}).populate('responsible', {
        Platform: 0,
    });
}

export async function deletePlatform(id, Platform) {
    return await Platform.findByIdAndDelete(id);
}

export async function updatePlatform(id, partialPlatform, Platform) {
    return await Platform.findByIdAndUpdate(id, partialPlatform, {
        new: true,
    }).populate('series', 'pricePerMonth', {
        tasks: 0,
    });
}
