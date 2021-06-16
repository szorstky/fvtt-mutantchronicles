async function preloadHandlebarsTemplates(){
    const template_paths = [
        "systems/mutantchronicles/templates/partials/mc-actor-stats-block.hbs"
    ];

    return loadTemplates(template_paths);
};