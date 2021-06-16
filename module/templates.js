export const preloadHandlebarsTemplates = async function() {
    const template_paths = [
        "systems/mutantchronicles/templates/partials/mc-actor-stats-block.hbs"
    ];

    return loadTemplates(template_paths);
};