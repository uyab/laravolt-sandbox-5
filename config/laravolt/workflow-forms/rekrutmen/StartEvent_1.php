<?php

return [
    'full_name' => ['type' => 'text', 'label' => 'Fullname'],
    'email' => ['type' => 'email', 'label' => 'Email Address'],
    'phone' => ['type' => 'text', 'label' => 'Phone'],
    'current_company' => ['type' => 'email', 'label' => 'Current Company'],
    'birth_day' => ['type' => 'datepicker', 'label' => 'Birth Day'],
    'birth_place' => ['type' => 'text', 'label' => 'Birth Place'],
    'latest_education' => ['type' => 'text', 'label' => 'Latest Education'],
    'male' => ['type' => 'radioGroup', 'label' => 'Jenis Kelamin', 'options' => [1 => 'Male', 0 => 'Female']],
    'join_date' => ['type' => 'datepicker', 'label' => 'Join Date'],
    'current_address' => ['type' => 'textarea', 'label' => 'Current Address'],
    'about' => ['type' => 'textarea', 'label' => 'About'],
    'portofolio' => ['type' => 'text', 'label' => 'Portofolio URL'],
    'linkedin_profile' => ['type' => 'text', 'label' => 'Linkedin Profile'],
    'sumber_lamaran' => ['type' => 'text', 'label' => 'How do you know this opportunity?'],
    'resume_cv' => ['type' => 'uploader', 'label' => 'Resume/CV'],
];
