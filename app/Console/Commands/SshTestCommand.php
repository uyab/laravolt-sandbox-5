<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Ssh\Ssh;

class SshTestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ssh:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test remote SSH command';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        libxml_disable_entity_loader();
        // $process = Ssh::create('root', '148.251.86.121')->execute(['ls']);
        // dump($process->getOutput());
        return 0;
    }
}
