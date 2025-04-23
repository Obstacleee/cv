import React, { useState } from 'react';
import { SkillGroup } from '../../types';

interface SkillSectionProps {
    skillGroup: SkillGroup;
}

const skillsPerPage = 10;

const SkillSection: React.FC<SkillSectionProps> = ({ skillGroup }) => {
    const [page, setPage] = useState(0);

    const totalPages = Math.ceil(skillGroup.skills.length / skillsPerPage);
    const start = page * skillsPerPage;
    const end = start + skillsPerPage;
    const skillsToDisplay = skillGroup.skills.slice(start, end);

    return (
        <div>
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-dark-200 flex items-center">
                {skillGroup.title}
            </h3>

            <div className="space-y-6">
                {skillsToDisplay.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-dark-700 dark:text-dark-300 font-medium">{skill.name}</span>
                            <span className="text-primary-600 dark:text-primary-400 font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={() => setPage((p) => Math.max(p - 1, 0))}
                        disabled={page === 0}
                        className="px-3 py-1 bg-primary-600 text-white rounded disabled:opacity-50"
                    >
                        Précédent
                    </button>
                    <button
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                        disabled={page === totalPages - 1}
                        className="px-3 py-1 bg-primary-600 text-white rounded disabled:opacity-50"
                    >
                        Voir plus
                    </button>
                </div>
            )}
            {totalPages > 1 && (
                <div className="text-xs text-gray-500 mt-1">
                    Page {page + 1} sur {totalPages}
                </div>
            )}
        </div>
    );
};

export default SkillSection;
